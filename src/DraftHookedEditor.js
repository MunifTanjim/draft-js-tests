import { Editor } from '@draft-js-hooks/editor'
import { EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css'
import React, { useCallback, useRef, useState } from 'react'

const hooks = []

function DraftHookedEditor() {
  const store = useRef(null)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onChange = useCallback(editorState => {
    setEditorState(editorState)
  }, [])

  const focus = useCallback(() => {
    if (store.current) {
      const editor = store.current.getEditor()
      if (editor) editor.focus()
    }
  }, [])

  return (
    <div onClick={focus} style={{ width: '320px', padding: '1em' }}>
      <Editor
        editorState={editorState}
        onChange={onChange}
        placeholder="Draft.js Test..."
        hooks={hooks}
        store={store}
      />
    </div>
  )
}

export default DraftHookedEditor
