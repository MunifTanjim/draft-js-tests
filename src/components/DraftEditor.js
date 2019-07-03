import { Editor, EditorState } from "draft-js"
import "draft-js/dist/Draft.css"
import React, { useCallback, useRef, useState } from "react"

function DraftEditor() {
  const editor = useRef(null)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onChange = useCallback(editorState => {
    setEditorState(editorState)
  }, [])

  const focus = useCallback(() => {
    if (editor.current) editor.current.focus()
  }, [])

  return (
    <div onClick={focus} style={{ width: "320px", padding: "1em" }}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={onChange}
        placeholder="Draft.js Tests..."
      />
    </div>
  )
}

export default DraftEditor
