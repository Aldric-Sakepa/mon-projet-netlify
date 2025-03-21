const fs = require('fs');

const pages = [
    { url: "https://saka1201.netlify.app/", priority: 1.0, changefreq: "weekly" },
    { url: "https://saka1201.netlify.app/#combat", priority: 0.8, changefreq: "monthly" },
    { url: "https://saka1201.netlify.app/#quete", priority: 0.8, changefreq: "monthly" },
    { url: "https://saka1201.netlify.app/#faq", priority: 0.7, changefreq: "monthly" }
];

const sitemapContent = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
    <url>
        <loc>${page.url}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>
`).join('')}
</urlset>`;

fs.writeFileSync('sitemap.xml', sitemapContent.trim());

console.log(" sitemap.xml généré !");
