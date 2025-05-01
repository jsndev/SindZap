import { Card, CardContent } from "@/components/ui/card"

export default function HelpPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Ajuda</h1>
      <Card>
        <CardContent className="p-6">
          <div className="h-full w-full flex items-center justify-center text-gray-500 py-12">
            <p>Página de ajuda em desenvolvimento</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
