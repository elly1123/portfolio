import { NotionBlock } from '@/app/types/portfolio';

interface NotionRendererProps {
  blocks: NotionBlock[];
}

const NotionRenderer = ({ blocks }: NotionRendererProps) => {
  const renderBlock = (block: NotionBlock) => {
    try {
      switch (block.type) {
        case 'paragraph':
          return (
            <p key={block.id} className="text-black mb-4">
              {block.paragraph?.rich_text?.map((text: any, index: number) => (
                <span
                  key={index}
                  className={`${text.annotations?.bold ? 'font-bold' : ''} 
                             ${text.annotations?.italic ? 'italic' : ''} 
                             ${text.annotations?.underline ? 'underline' : ''}`}
                >
                  {text.plain_text}
                </span>
              )) || ''}
            </p>
          );

        case 'heading_1':
          return (
            <h1
              key={block.id}
              className="text-3xl font-bold mb-6 text-black border-b border-gray-200 pb-2"
            >
              {block.heading_1?.rich_text
                ?.map((text: any) => text.plain_text)
                .join('') || ''}
            </h1>
          );

        case 'heading_2':
          return (
            <h2
              key={block.id}
              className="text-2xl font-bold mt-8 mb-4 text-black"
            >
              {block.heading_2?.rich_text
                ?.map((text: any) => text.plain_text)
                .join('') || ''}
            </h2>
          );

        case 'heading_3':
          return (
            <h3
              key={block.id}
              className="text-xl font-bold mt-6 mb-3 text-black"
            >
              {block.heading_3?.rich_text
                ?.map((text: any) => text.plain_text)
                .join('') || ''}
            </h3>
          );

        case 'bulleted_list_item':
          return (
            <li key={block.id} className="text-black ml-4 mb-2">
              {block.bulleted_list_item?.rich_text
                ?.map((text: any) => text.plain_text)
                .join('') || ''}
            </li>
          );

        case 'numbered_list_item':
          return (
            <li key={block.id} className="text-black ml-4 mb-2 list-decimal">
              {block.numbered_list_item?.rich_text
                ?.map((text: any) => text.plain_text)
                .join('') || ''}
            </li>
          );

        case 'image':
          const imageUrl = block.image?.file?.url || block.image?.external?.url;
          return imageUrl ? (
            <div key={block.id} className="my-4">
              <img
                src={imageUrl}
                alt="Content"
                className="max-w-full rounded-lg"
              />
            </div>
          ) : null;

        case 'code':
          return (
            <pre
              key={block.id}
              className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto"
            >
              <code className="text-gray-300">
                {block.code?.rich_text
                  ?.map((text: any) => text.plain_text)
                  .join('') || ''}
              </code>
            </pre>
          );

        case 'callout':
          return (
            <div
              key={block.id}
              className="flex items-start p-4 my-4 bg-gray-100 rounded-lg"
            >
              {block.callout?.icon?.type === 'emoji' && (
                <div className="mr-4 text-xl">{block.callout.icon.emoji}</div>
              )}
              <div className="text-black">
                {block.callout?.rich_text?.map((text: any, index: number) => (
                  <span
                    key={index}
                    className={`${text.annotations?.bold ? 'font-bold' : ''} 
                              ${text.annotations?.italic ? 'italic' : ''} 
                              ${
                                text.annotations?.underline ? 'underline' : ''
                              }`}
                  >
                    {text.plain_text}
                  </span>
                )) || ''}
              </div>
            </div>
          );

        default:
          return null;
      }
    } catch (error) {
      console.error('Error rendering block:', error, block);
      return null;
    }
  };

  return <>{blocks.map(renderBlock)}</>;
};

export default NotionRenderer;
