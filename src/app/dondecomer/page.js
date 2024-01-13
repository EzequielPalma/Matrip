
import FetchRestaurantes from '../components/FetchRestaurantes'
import Header from '../components/Header'
import MiComponente from '../components/MiComponente'

export default function DondeComer() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header/>
        <MiComponente/>

        <FetchRestaurantes/>
       
  
        
        <h1 className="underline text-red-600 bg-green-700"> hola</h1>
           
      </main>
    )
  }
  
   