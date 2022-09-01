import { Contact } from '../types/Job'

export default function ContactPerson({ name, email, photo }: Contact) {
  return (
    <div className="flex space-x-10 items-center">
      {photo ? (
        <img
          src={photo}
          alt={name}
          className="rounded-full w-28 aspect-square object-cover"
        />
      ) : null}
      <div>
        <h4>{name}</h4>
        <a
          href={`mailto:${email}`}
          className="underline"
        >
          {email}
        </a>
      </div>
    </div>
  )
}