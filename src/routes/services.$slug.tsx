import { createFileRoute } from '@tanstack/react-router'
import ServiceDetailPage from '../pages/ServiceDetail'

export const Route = createFileRoute('/services/$slug')({
  component: ServiceDetailPage,
})

