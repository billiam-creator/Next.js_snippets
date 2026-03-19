import React from 'react'

// Define the type as a Promise
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Await the params before using them
  const { id } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-3 max-w-3xl">
        <h1 className="text-5xl font-semibold">Tyre: {id}</h1>
        <p className="text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eius necessitatibus porro officia esse neque unde at. Sunt explicabo vitae sit m
          olestiae, aliquid provident reprehenderit nemo dicta, eos facere inventore sequi.
        </p>
      </div>
    </div>
  )
}

export default page