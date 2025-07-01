import JSZip from 'jszip';

// List of all source files to be included in the zip
const filePaths = [
    'index.html',
    'package.json',
    'vite.config.ts',
    'tsconfig.json',
    'tsconfig.node.json',
    'README.md',
    'src/main.tsx',
    'src/styles.css',
    'src/App.tsx',
    'src/vite-env.d.ts',
    'src/components/Icons.tsx',
    'src/components/ThemeToggle.tsx',
    'src/components/ThemeToggle.css',
    'src/components/BottomNav.tsx',
    'src/components/BottomNav.css',
    'src/pages/Home.tsx',
    'src/pages/Attendance.tsx',
    'src/pages/Insights.tsx',
    'src/utils/downloader.ts' // Yes, include the downloader itself
];

async function fetchFile(path: string): Promise<[string, string]> {
    // In a Vite dev environment, paths are relative to the project root.
    // For a production build, paths are relative to index.html.
    // This setup assumes assets are served from the same origin.
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
    }
    const content = await response.text();
    return [path, content];
}

export async function downloadSource() {
    const zip = new JSZip();
    
    // Fetch all files in parallel
    const allFiles = await Promise.all(filePaths.map(fetchFile));

    // Add all fetched files to the zip archive
    allFiles.forEach(([path, content]) => {
        zip.file(path, content);
    });

    // Generate the zip file
    const zipBlob = await zip.generateAsync({
        type: 'blob',
        compression: "DEFLATE",
        compressionOptions: {
            level: 9
        }
    });

    // Trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = 'smarttrack-test-source.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}
