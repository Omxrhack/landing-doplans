import { cn } from "@/lib/utils";

const data = [
  { name: "Carlos M.", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop" },
  { name: "Ana R.", image: "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?q=80&w=200&auto=format&fit=crop" },
  { name: "Luis T.", image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=200&auto=format&fit=crop" },
  { name: "María G.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
  { name: "Javier P.", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=200&auto=format&fit=crop" },
];

interface AvatarData {
  name: string;
  image: string;
}

export default function AvatarList({ size = "md", className, items }: { size?: "sm" | "md" | "lg"; className?: string; items?: AvatarData[] }) {
  const avatars = items ?? data;
  const sizes: Record<"sm" | "md" | "lg", string> = { lg: "size-10", md: "size-12", sm: "size-8" };

  return (
    <div className={cn("flex py-4", className)}>
      {avatars.map((item, index) => (
        <div key={index} className={cn("group/avatar relative z-0 flex scale-100 items-center transition duration-200 hover:z-10 hover:scale-110", index > 0 && "-ml-3")}>
          <div className="relative overflow-hidden rounded-full ring-2 ring-purple/30">
            <img src={item.image} alt={item.name} className={cn("rounded-full object-cover", sizes[size])} />
          </div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 whitespace-nowrap rounded bg-fg px-2 py-1 text-xs text-bg opacity-0 transition duration-200 group-hover/avatar:-translate-y-2 group-hover/avatar:opacity-100">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}
