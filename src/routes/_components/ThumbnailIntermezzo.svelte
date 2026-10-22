<div
  class={`
  flex flex-col
  justify-center border-2
  border-gray-700 bg-gray-800 p-4
  text-center text-gray-200 shadow-lg shadow-black/50
  transition-all duration-500
  hover:bg-gray-900 xl:p-8 xl:text-xl
  ${$$props.class}
`}
>
  <slot />
</div>
