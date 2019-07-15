import { Editor } from "@draft-js-hooks/editor"
import { EditorState } from "draft-js"
import "draft-js/dist/Draft.css"
import React, { useCallback, useEffect, useRef, useState } from "react"

const hooks = []

function DraftEditor() {
  const store = useRef(null)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const onChange = useCallback(editorState => {
    setEditorState(editorState)
  }, [])

  const focus = useCallback(() => {
    const editor = store.current.getEditor()
    if (editor) editor.focus()
  }, [])

  return (
    <div onClick={focus} style={{ width: "320px", padding: "1em" }}>
      {mounted ? (
        <Editor
          editorState={editorState}
          onChange={onChange}
          placeholder="Draft.js Tests..."
          hooks={hooks}
          store={store}
        />
      ) : null}
    </div>
  )
}

export default DraftEditor
