import supabase from "../config/supabaseClinet"

const Home = () => {

  console.log(supabase)

  return (
    <div className="page home">
      <h2>Home</h2>
    </div>
  )
}

export default Home