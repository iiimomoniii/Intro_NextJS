import React from 'react'

type Props = {
    params : { slug : string[] }
}

export default function User({ params }: Props) {
  return (
    <div>
        {
            params.slug?.map((v) => (
                <li key={v}>User Id : {v}</li>
            ))
        }
    </div>
  )
}