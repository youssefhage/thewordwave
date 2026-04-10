import fs from 'fs';

const posts = JSON.parse(fs.readFileSync('data/blogs.json', 'utf8'));

function mdToHtml(md) {
  return md
    // Remove the H1 title line (already shown in the page header)
    .replace(/^#\s+.+\n*/m, '')
    // H3
    .replace(/^###\s+(.+)$/gm, '<h3>$1</h3>')
    // H2
    .replace(/^##\s+(.+)$/gm, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Unordered list items
    .replace(/^-\s+(.+)$/gm, '<li>$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => '<ul>' + match.trim() + '</ul>')
    // Paragraphs
    .split('\n\n')
    .map(block => {
      block = block.trim();
      if (!block) return '';
      if (block.startsWith('<h') || block.startsWith('<ul') || block.startsWith('<ol')) return block;
      if (block.startsWith('<')) return block;
      return '<p>' + block.replace(/\n/g, ' ') + '</p>';
    })
    .filter(Boolean)
    .join('');
}

let ts = `export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
}

const blogPosts: BlogPost[] = [
`;

for (const post of posts) {
  const html = mdToHtml(post.content);
  ts += '  {\n';
  ts += '    slug: ' + JSON.stringify(post.slug) + ',\n';
  ts += '    title: ' + JSON.stringify(post.title) + ',\n';
  ts += '    excerpt: ' + JSON.stringify(post.excerpt) + ',\n';
  ts += '    image: ' + JSON.stringify(post.image) + ',\n';
  ts += '    date: ' + JSON.stringify(post.date) + ',\n';
  ts += '    content: ' + JSON.stringify(html) + ',\n';
  ts += '  },\n';
}

ts += `];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
`;

fs.writeFileSync('data/blog-data.ts', ts);
console.log('Done. Posts:', posts.length);
console.log('File size:', (fs.statSync('data/blog-data.ts').size / 1024).toFixed(1) + 'KB');
