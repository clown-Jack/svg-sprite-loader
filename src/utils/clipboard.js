import Clipboard from "clipboard";
import { message } from "ant-design-vue";

function clipboardSuccess(text) {
  message.success(`${text} Copy success`);
}

function clipboardError() {
  message.error("Copy error");
}
export const handleClipboard = (text, event) => {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  });
  clipboard.on("success", () => {
    clipboardSuccess(text);
    clipboard.destroy();
  });
  clipboard.on("error", () => {
    clipboardError();
    clipboard.destroy();
  });
   clipboard.onClick(event);
};
