'use client'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold } from '@tiptap/extension-bold'
import { RichTextEditor } from '@mantine/tiptap'
import { MantineProvider } from '@mantine/core';
import { IconBold, IconItalic, IconAlignLeft, IconAlignCenter, IconAlignJustified, IconAlignRight } from '@tabler/icons-react';
import TextAlign from '@tiptap/extension-text-align';
import { AlignCenter } from '@tabler/icons-react';
import Placeholder from '@tiptap/extension-placeholder';
import '@mantine/tiptap/styles.css';

const BoldIcon = () => <IconBold size="2rem"  className='border rounded-l-lg w-full p-1 hover:bg-base-200 active:p-[6px]' />;
const ItalicIcon = () => <IconItalic size="2rem" className='border w-full p-1 hover:bg-base-200 active:p-[6px]' />;
const AlignLeftIcon = () => <IconAlignLeft size="2rem" className='border w-full p-1 hover:bg-base-200 active:p-[6px]' />;
const AlignCenterIcon = () => <IconAlignCenter size="2rem" className='border w-full p-1 hover:bg-base-200 active:p-[6px]' />;
const AlignJustifiedBoldIcon = () => <IconAlignJustified size="2rem" className='border w-full p-1 hover:bg-base-200 active:p-[6px]' />;
const AlignRightBoldIcon = () => <IconAlignRight size="2rem" className='border rounded-r-lg w-full p-1 hover:bg-base-200 active:p-[6px]' />;

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Placeholder.configure({ placeholder: 'This is placeholder' }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: '',
  })

  return (
    <MantineProvider>
      <RichTextEditor editor={editor} className='container mx-auto my-6 py-6 '>
        <div className='border p-6'>
          <RichTextEditor.Toolbar>
            <div className='flex'>
              <RichTextEditor.ControlsGroup >
                <RichTextEditor.Bold icon={BoldIcon} />
                <RichTextEditor.Italic icon={ItalicIcon} />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup >
                <RichTextEditor.AlignLeft icon={AlignLeftIcon} />
                <RichTextEditor.AlignCenter icon={AlignCenterIcon} />
                <RichTextEditor.AlignRight icon={AlignJustifiedBoldIcon} />
                <RichTextEditor.AlignJustify icon={AlignRightBoldIcon} />
              </RichTextEditor.ControlsGroup>
            </div>
          </RichTextEditor.Toolbar>
          <div className='input input-bordered my-4 p-3 rounded-lg '>
            <RichTextEditor.Content />
          </div>
        </div>
      </RichTextEditor>
    </MantineProvider>
  )
}

export default Tiptap