import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, useState } from 'react'

export function NewNoteCard() {
  const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true)

  function handleStartEditor() {
    setShouldShowOnBoarding(false)
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.target.value === '') {
      setShouldShowOnBoarding(true)
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col bg-slate-700 p-5 text-left gap-3 outline-none  hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em audio que será convertida para texto automaticamente
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content className="fixed overflow-hidden top-1/2 left-1/2 max-w-[640px] w-full h-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-700 flex flex-col outline-none">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              Adicionar nota
            </span>
            {shouldShowOnBoarding ? (
              <p className="text-sm leading-6 text-slate-400">
                Comece{' '}
                <button className="font-medium text-lime-400 hover:underline">
                  gravando uma nota em áudio
                </button>{' '}
                ou se prefirir{' '}
                <button
                  onClick={handleStartEditor}
                  className="font-medium text-lime-400 hover:underline"
                >
                  utilize apenas texto
                </button>
              </p>
            ) : (
              <textarea
                autoFocus
                className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                onChange={handleContentChange}
              />
            )}
          </div>

          <button
            type="button"
            className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
          >
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
