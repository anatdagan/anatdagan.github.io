function List({items}: {items: {icon: React.ReactNode, text: string, description: string}[]}) {
    return (
        <ul className="flex flex-col gap-4 p-4 md:p-[6rem]">
            {items.map((item, index) => (
                <li key={index} className="flex gap-4 py-4 md:py-4">
                    {item.icon}
                    <section className="shrink w-[calc(100%-54px)] text-right">
                        <h3 className="font-bold text-2xl">{item.text}</h3>
                        <p>{item.description}</p>
                    </section>
                </li>
            ))}
        </ul>
    )
}

export default List
