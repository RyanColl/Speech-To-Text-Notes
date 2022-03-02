import React from 'react'
import FolderNavigation from './FolderNavigation/FolderNavigation'
import NoteNavigation from './NoteNavigation/NoteNavigation'
import NoteSection from './NoteSection/NoteSection'
import './NoteStyles.scss'

function NoteContainer() {
  return (
    <div className='note-container'>
        <FolderNavigation />
        <NoteNavigation />
        <NoteSection />
    </div>
  )
}

export default NoteContainer