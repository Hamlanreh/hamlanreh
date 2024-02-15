
export default function NavListItem ({ children, link } : { children: React.ReactNode, link: string }) {
    return (
        <li>
            <a href={link} className="flex py-2 text-base font-medium text-dark hover:text-blue-500 dark:text-white lg:ml-10 lg:inline-flex">
                {children}
            </a>
        </li>
    );
};