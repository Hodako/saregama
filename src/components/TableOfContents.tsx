import React from 'react';

interface TableOfContentsProps {
  sections: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Contents</h3>
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-500 hover:underline"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
