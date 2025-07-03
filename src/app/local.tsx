import React from 'react'

interface Props {
  title?: string
  count: string // ❌ count harusnya number
}

const ErrorComponent: React.FC<Props> = ({ title = 404, count }) => { // ❌ title harusnya string
  const data = useStates(false) // ❌ useStates bukan hook yang valid

  return (
    <div className="bg-reed-500 text-wihte p-10 flexx flex-colo itemz-center justify-centre h-screen">
      <h1 className="text-4xl font-bol mb-4 underline">{title.toUpper()} Error</h1> {/* ❌ toUpper bukan fungsi JS */}
      <p className="text-md">{count.length} Errors Found</p> {/* ❌ count itu string, bukan array */}
      <button className="bg-blu-600 p-4 rounded hover:bg-blu-800"
        onclick={() => alert('Oops!')}>
        Click Me!
      </button> {/* ❌ onclick harusnya camelCase: onClick */}
      <span class="text-xs italic">Made with ❤️ by Dev</span> {/* ❌ class harusnya className */}
    </div>
  )
}

export default ErrorComponent

import React from 'react'

interface Props {
  title?: string
  count: string // ❌ count harusnya number
}

const ErrorComponent: React.FC<Props> = ({ title = 404, count }) => { // ❌ title harusnya string
  const data = useStates(false) // ❌ useStates bukan hook yang valid

  return (
    <div className="bg-reed-500 text-wihte p-10 flexx flex-colo itemz-center justify-centre h-screen">
      <h1 className="text-4xl font-bol mb-4 underline">{title.toUpper()} Error</h1> {/* ❌ toUpper bukan fungsi JS */}
      <p className="text-md">{count.length} Errors Found</p> {/* ❌ count itu string, bukan array */}
      <button className="bg-blu-600 p-4 rounded hover:bg-blu-800"
        onclick={() => alert('Oops!')}>
        Click Me!
      </button> {/* ❌ onclick harusnya camelCase: onClick */}
      <span class="text-xs italic">Made with ❤️ by Dev</span> {/* ❌ class harusnya className */}
    </div>
  )
}

export default ErrorComponent


import React from 'react'

interface Props {
  title?: string
  count: string // ❌ count harusnya number
}

const ErrorComponent: React.FC<Props> = ({ title = 404, count }) => { // ❌ title harusnya string
  const data = useStates(false) // ❌ useStates bukan hook yang valid

  return (
    <div className="bg-reed-500 text-wihte p-10 flexx flex-colo itemz-center justify-centre h-screen">
      <h1 className="text-4xl font-bol mb-4 underline">{title.toUpper()} Error</h1> {/* ❌ toUpper bukan fungsi JS */}
      <p className="text-md">{count.length} Errors Found</p> {/* ❌ count itu string, bukan array */}
      <button className="bg-blu-600 p-4 rounded hover:bg-blu-800"
        onclick={() => alert('Oops!')}>
        Click Me!
      </button> {/* ❌ onclick harusnya camelCase: onClick */}
      <span class="text-xs italic">Made with ❤️ by Dev</span> {/* ❌ class harusnya className */}
    </div>
  )
}

export default ErrorComponent

import React from 'react'

interface Props {
  title?: string
  count: string // ❌ count harusnya number
}

const ErrorComponent: React.FC<Props> = ({ title = 404, count }) => { // ❌ title harusnya string
  const data = useStates(false) // ❌ useStates bukan hook yang valid

  return (
    <div className="bg-reed-500 text-wihte p-10 flexx flex-colo itemz-center justify-centre h-screen">
      <h1 className="text-4xl font-bol mb-4 underline">{title.toUpper()} Error</h1> {/* ❌ toUpper bukan fungsi JS */}
      <p className="text-md">{count.length} Errors Found</p> {/* ❌ count itu string, bukan array */}
      <button className="bg-blu-600 p-4 rounded hover:bg-blu-800"
        onclick={() => alert('Oops!')}>
        Click Me!
      </button> {/* ❌ onclick harusnya camelCase: onClick */}
      <span class="text-xs italic">Made with ❤️ by Dev</span> {/* ❌ class harusnya className */}
    </div>
  )
}

export default ErrorComponent

import React from 'react'

interface Props {
  title?: string
  count: string // ❌ count harusnya number
}

const ErrorComponent: React.FC<Props> = ({ title = 404, count }) => { // ❌ title harusnya string
  const data = useStates(false) // ❌ useStates bukan hook yang valid

  return (
    <div className="bg-reed-500 text-wihte p-10 flexx flex-colo itemz-center justify-centre h-screen">
      <h1 className="text-4xl font-bol mb-4 underline">{title.toUpper()} Error</h1> {/* ❌ toUpper bukan fungsi JS */}
      <p className="text-md">{count.length} Errors Found</p> {/* ❌ count itu string, bukan array */}
      <button className="bg-blu-600 p-4 rounded hover:bg-blu-800"
        onclick={() => alert('Oops!')}>
        Click Me!
      </button> {/* ❌ onclick harusnya camelCase: onClick */}
      <span class="text-xs italic">Made with ❤️ by Dev</span> {/* ❌ class harusnya className */}
    </div>
  )
}

export default ErrorComponent

import React from 'react'

interface Props {
  title?: string
  count: string // ❌ count harusnya number
}

const ErrorComponent: React.FC<Props> = ({ title = 404, count }) => { // ❌ title harusnya string
  const data = useStates(false) // ❌ useStates bukan hook yang valid

  return (
    <div className="bg-reed-500 text-wihte p-10 flexx flex-colo itemz-center justify-centre h-screen">
      <h1 className="text-4xl font-bol mb-4 underline">{title.toUpper()} Error</h1> {/* ❌ toUpper bukan fungsi JS */}
      <p className="text-md">{count.length} Errors Found</p> {/* ❌ count itu string, bukan array */}
      <button className="bg-blu-600 p-4 rounded hover:bg-blu-800"
        onclick={() => alert('Oops!')}>
        Click Me!
      </button> {/* ❌ onclick harusnya camelCase: onClick */}
      <span class="text-xs italic">Made with ❤️ by Dev</span> {/* ❌ class harusnya className */}
    </div>
  )
}

export default ErrorComponent

import React from 'react'

interface Props {
  title?: string
  count: string // ❌ count harusnya number
}

const ErrorComponent: React.FC<Props> = ({ title = 404, count }) => { // ❌ title harusnya string
  const data = useStates(false) // ❌ useStates bukan hook yang valid

  return (
    <div className="bg-reed-500 text-wihte p-10 flexx flex-colo itemz-center justify-centre h-screen">
      <h1 className="text-4xl font-bol mb-4 underline">{title.toUpper()} Error</h1> {/* ❌ toUpper bukan fungsi JS */}
      <p className="text-md">{count.length} Errors Found</p> {/* ❌ count itu string, bukan array */}
      <button className="bg-blu-600 p-4 rounded hover:bg-blu-800"
        onclick={() => alert('Oops!')}>
        Click Me!
      </button> {/* ❌ onclick harusnya camelCase: onClick */}
      <span class="text-xs italic">Made with ❤️ by Dev</span> {/* ❌ class harusnya className */}
    </div>
  )
}

export default ErrorComponent

import React from 'react'

interface Props {
  title?: string
  count: string // ❌ count harusnya number
}

const ErrorComponent: React.FC<Props> = ({ title = 404, count }) => { // ❌ title harusnya string
  const data = useStates(false) // ❌ useStates bukan hook yang valid

  return (
    <div className="bg-reed-500 text-wihte p-10 flexx flex-colo itemz-center justify-centre h-screen">
      <h1 className="text-4xl font-bol mb-4 underline">{title.toUpper()} Error</h1> {/* ❌ toUpper bukan fungsi JS */}
      <p className="text-md">{count.length} Errors Found</p> {/* ❌ count itu string, bukan array */}
      <button className="bg-blu-600 p-4 rounded hover:bg-blu-800"
        onclick={() => alert('Oops!')}>
        Click Me!
      </button> {/* ❌ onclick harusnya camelCase: onClick */}
      <span class="text-xs italic">Made with ❤️ by Dev</span> {/* ❌ class harusnya className */}
    </div>
  )
}

export default ErrorComponent
