import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ImageResize } from 'quill-image-resize-module-ts';
import { useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { storage } from '../../firebase/init';

interface EditorPropType {
  height: string;
  value: string;
  onChange: (value: string) => void;
}

const Editor = ({ height, value, onChange }: EditorPropType) => {
  console.log(value);
  const quillRef = useRef<ReactQuill | null>(null);
  const toolbar = quillRef.current?.getEditor().getModule('toolbar');

  Quill.register('modules/ImageResize', ImageResize);

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.addEventListener('change', async () => {
      const editor = quillRef.current?.getEditor();
      const file = input.files && input.files[0];
      const range = editor?.getSelection(true);
      try {
        if (editor && range) {
          // 파일명을 "image/Date.now()"로 저장
          const storageRef = ref(storage, `image/${Date.now()}`);
          // Firebase Method : uploadBytes, getDownloadURL
          await uploadBytes(
            storageRef,
            file as Blob | Uint8Array | ArrayBuffer
          ).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              // 이미지 URL 에디터에 삽입
              editor.insertEmbed(range.index, 'image', url);
              // URL 삽입 후 커서를 이미지 뒷 칸으로 이동
              editor.setSelection(range.index + 1, range.length);
            });
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  toolbar?.addHandler('image', imageHandler);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image'],
        [
          { align: [] },
          {
            color: [
              '#000000',
              '#e60000',
              '#ff9900',
              '#ffff00',
              '#008a00',
              '#0066cc',
              '#9933ff',
              '#ffffff',
              '#facccc',
              '#ffebcc',
              '#ffffcc',
              '#cce8cc',
              '#cce0f5',
              '#ebd6ff',
              '#bbbbbb',
              '#f06666',
              '#ffc266',
              '#ffff66',
              '#66b966',
              '#66a3e0',
              '#c285ff',
              '#888888',
              '#a10000',
              '#b26b00',
              '#b2b200',
              '#006100',
              '#0047b2',
              '#6b24b2',
              '#444444',
              '#5c0000',
              '#663d00',
              '#666600',
              '#003700',
              '#002966',
              '#3d1466',
              'custom-color',
            ],
          },
          {
            background: [
              '#000000',
              '#e60000',
              '#ff9900',
              '#ffff00',
              '#008a00',
              '#0066cc',
              '#9933ff',
              '#ffffff',
              '#facccc',
              '#ffebcc',
              '#ffffcc',
              '#cce8cc',
              '#cce0f5',
              '#ebd6ff',
              '#bbbbbb',
              '#f06666',
              '#ffc266',
              '#ffff66',
              '#66b966',
              '#66a3e0',
              '#c285ff',
              '#888888',
              '#a10000',
              '#b26b00',
              '#b2b200',
              '#006100',
              '#0047b2',
              '#6b24b2',
              '#444444',
              '#5c0000',
              '#663d00',
              '#666600',
              '#003700',
              '#002966',
              '#3d1466',
              'custom-color',
            ],
          },
        ],
        ['clean'],
      ],
    },
    ImageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize'],
    },
  };

  const formats = [
    'header',
    'bold',
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
    'width',
  ];

  return (
    <ReactQuill
      ref={quillRef}
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
