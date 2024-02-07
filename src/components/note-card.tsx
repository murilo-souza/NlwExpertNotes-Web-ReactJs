export function NoteCard() {
  return (
    <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque
        assumenda fugiat maiores excepturi, ullam minus! Sed placeat pariatur
        quasi nulla est animi, odio officia? Officiis perferendis ducimus
        reprehenderit voluptatibus? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Molestiae facilis autem doloremque quidem officia
        molestias, cum fuga? Impedit accusamus veniam neque odio non voluptatem
        tempore velit corporis vero. Ipsa, totam.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </div>
  )
}
