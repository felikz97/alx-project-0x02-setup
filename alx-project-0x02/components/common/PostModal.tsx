// components/common/PostModal.tsx

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PostModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  content?: string
  onSubmit?: (data: { title: string; content: string }) => void
}

const PostModal = ({ isOpen, onClose, title = '', content = '', onSubmit }: PostModalProps) => {
  const [formTitle, setFormTitle] = useState(title)
  const [formContent, setFormContent] = useState(content)

  useEffect(() => {
    if (isOpen) {
      setFormTitle(title)
      setFormContent(content)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, title, content])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit({ title: formTitle, content: formContent })
    }
    onClose()
  }

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Post Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              value={formContent}
              onChange={(e) => setFormContent(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}

export default PostModal
