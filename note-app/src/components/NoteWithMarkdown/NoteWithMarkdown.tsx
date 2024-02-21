import {marked} from "marked";
import sanitizeHtml from "sanitize-html";

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
    "img",
    "h1",
    "h2",
    "h3",
]);
const allowedAttributes = Object.assign(
    {},
    sanitizeHtml.defaults.allowedAttributes,
    {
        img: ["alt", "src"],
    }
);

type Props = {
    text: string | undefined;
};

const NoteWithMarkdown = ({text}: Props) => {
    return (
        <div
            className="text-with-markdown"
            dangerouslySetInnerHTML={{
                __html: sanitizeHtml(marked(text || "") as string, {
                    allowedTags,
                    allowedAttributes,
                }),
            }}
        />
    );
};

export default NoteWithMarkdown;
