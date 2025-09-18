import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

type StatCardProps = {
  title: string
  value: string | number
  icon?: ReactNode
}

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <Card className="rounded-2xl shadow-sm border p-4 flex flex-col gap-2 w-32">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
        <CardTitle className="text-xs font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent className="p-0">
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

export default StatCard