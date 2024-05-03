import { FC, lazy, Suspense } from 'react'

const LazyComponent = lazy(() => {
  return new Promise<{ default: FC }>((resolve) => {
    setTimeout(() => {
      import('./LazyComponent.tsx').then((module) => {
        resolve({ default: module.default })
      })
    }, 1000) 
  })
})

const Lazy = () => {
  return (
    <div>
      <Suspense fallback={<h1 className='container'>Loading...</h1>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

export default Lazy