interface ButtonTypes {
    title : string,
    onclick : () => void
    version : "primary" | "default"
}

const styleClass ={
    primary : "bg-blue-600 md:px-4 px-2 md:text-lg text-sm rounded-2xl py-1",
    default : "hover:bg-red-300 transition  rounded-md"
}

export default function Button({title, onclick, version} : ButtonTypes){
    return (    
        <button onClick={onclick} className={`${styleClass[version]}`}>
            {title}
        </button>
    )
}