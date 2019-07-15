import { Editor } from "@draft-js-hooks/editor"
import { getHashtagHook } from "@draft-js-hooks/hashtag"
import { getStatsHook } from "@draft-js-hooks/stats"
import { EditorState } from "draft-js"
import "draft-js/dist/Draft.css"
import React, { useCallback, useEffect, useRef, useState } from "react"
import "./DraftHookedEditor.css"

const HashtagHook = getHashtagHook()
const StatsHook = getStatsHook()

const hooks = [HashtagHook, StatsHook]

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
        <>
          <Editor
            editorState={editorState}
            onChange={onChange}
            placeholder="Draft.js Tests..."
            hooks={hooks}
            store={store}
          />
          <hr />
          <StatsHook.Stats />
        </>
      ) : null}
    </div>
  )
}

export default DraftEditor
