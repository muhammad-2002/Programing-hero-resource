import React from "react";
import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import d404 from "../assets/404.jpg";

const Content = () => {
  const blog = useLoaderData();
  const { id, title, cover_image, published_at, description, tags, body_html } =
    blog;
  return (
    <div
      href="#"
      className=" mx-auto group focus:no-underline bg-gray-900 dark:bg-gray-50  border-2 border-primary border-opacity-40 transition-transform p-2"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
        src={cover_image || d404}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed ">
        {tags &&
          tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline "
            >
              #{tag}
            </a>
          ))}
      </div>

      <div className="space-y-2">
        <a
          target="_blank"
          className="text-2xl font-semibold group-hover:underline group-focus:underline"
        >
          {title}
        </a>

        <div className="code ">
          <Markdown
            rehypePlugins={[rehypeRaw]}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={dark}
                  />
                ) : (
                  <code {...rest} className={"text-red-500  "}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {body_html}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default Content;
