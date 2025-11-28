import { Users, BookOpen, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Mentor Support",
    description:
      "Connect with cancer survivors and trained volunteers who understand your journey and provide personalized guidance through every step.",
  },
  {
    icon: BookOpen,
    title: "Awareness Resources",
    description:
      "Access curated information about treatments, nutrition, lifestyle changes, and the latest research in cancer care—all in regional languages.",
  },
  {
    icon: HeartHandshake,
    title: "Emotional Support",
    description:
      "Join support groups, attend wellness sessions, and connect with others who truly understand. You're never alone in this fight.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
            How We Help
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Care at Every Step
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            We provide a holistic support system designed to empower patients and caregivers throughout their cancer
            journey.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
