import { Icon } from 'phosphor-react'

interface DescProps {
  Icon: Icon
  label: string
  value: string
}

export default function Desc({ Icon, label, value }: DescProps) {
  return (
    <div className="flex gap-x-4 items-center">
      <Icon size={30} />
      <div>
        <small>{label}</small>
        <br />
        {value}
      </div>
    </div>
  )
}