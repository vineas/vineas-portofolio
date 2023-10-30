type TitleProps = {
    children: string;
    id: string
}

function Title(props: TitleProps) {
   return (
      <h1
         id={props.id && props.id}
         className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
      >
         {props.children}
      </h1>
   )
}

export default Title;