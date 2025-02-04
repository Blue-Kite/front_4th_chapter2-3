import { Search } from "lucide-react"
import { Input } from "../../../shared/ui"

interface SearchInputProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  onSearch: () => void
}

export const SearchInput = ({ searchQuery, onSearchChange, onSearch }: SearchInputProps) => (
  <div className="flex-1">
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="게시물 검색..."
        className="pl-8"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSearch()}
      />
    </div>
  </div>
)
