import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {InboxIcon, ChartPieIcon, CogIcon} from '@heroicons/react/outline'

const navigation = [
  {name: 'Dashboard', icon: ChartPieIcon, href: '/', current: true},
  {
    name: 'Workspace',
    icon: InboxIcon,
    href: '/Workspace',
    count: 3,
    current: false,
  },
  {
    name: 'Parameter',
    icon: CogIcon,
    href: '/Parameter',
    current: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className="flex flex-col flex-grow  pt-5 pb-4 overflow-y-auto">
      <div className="h-36 self-center">
        <img
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1\&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="profile"
          className="bg-gray-300 w-32 h-32 rounded-full"
        />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-1" aria-label="Sidebar">
          {navigation.map(item => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.href === location.pathname
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              )}
            >
              <item.icon
                className={classNames(
                  item.href === location.pathname
                    ? 'text-gray-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6',
                )}
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.href === location.pathname
                      ? 'bg-white'
                      : 'bg-gray-100 group-hover:bg-gray-200',
                    'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full',
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
