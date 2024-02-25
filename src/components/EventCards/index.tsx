import { EventCardInfo } from '@/@types/events'
import React from 'react'

type EventCardProps = EventCardInfo & {
  favorite?: boolean
}

const EventCard: React.FC<EventCardProps> = ({
  banner,
  description,
  id,
  isOpen,
  moreInfo,
  favorite,
}) => {
  return <div>{id}</div>
}

export { EventCard }
