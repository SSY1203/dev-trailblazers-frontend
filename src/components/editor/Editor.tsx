import { ImageResize } from 'quill-image-resize-module-ts';
import ReactQuill, { Quill } from 'react-quill';

interface EditorPropType {
  height: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Editor = ({ height, value, onChange }: EditorPropType) => {
  Quill.register('modules/ImageResize', ImageResize);
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
    ImageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize'],
    },
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];
  return (
    <ReactQuill
      theme="snow"
      style={{ height }}
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
    />
  );
};

export default Editor;
