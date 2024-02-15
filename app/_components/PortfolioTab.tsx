
export default function PorfolioTab ({ onClick, showCard, tabName }: {onClick: () => void, showCard: string, tabName: string}) {
  return (
    <li className="mb-1">
      <button
        onClick={onClick}
        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
        showCard === tabName
          ? "activeClasses bg-primary text-white"
          : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
        }`}
      >
        {tabName}
      </button>
    </li>
  )
}