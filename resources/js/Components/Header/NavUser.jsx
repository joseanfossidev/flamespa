export default function NavUser ({ user }) {
    return (
        <a href="#" className="ml-6 block text-slate-700 dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
            <img className="inline-block h-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            {user.name}
        </a>
    )
}
