import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "When I was diagnosed, I felt lost and scared. CareConnect connected me with a mentor who had been through the same journey. Her guidance and the community's support gave me the strength to fight. Today, I'm cancer-free and helping others as a mentor myself.",
    name: "Priya Sharma",
    role: "Breast Cancer Survivor, Delhi",
    avatar: "/indian-woman-smiling.png",
  },
  {
    quote:
      "As a caregiver for my father, I was overwhelmed. The emotional support groups at CareConnect helped me cope with my own anxiety while providing better care. The resources in Hindi made everything so much more accessible for our family.",
    name: "Rahul Verma",
    role: "Caregiver, Mumbai",
    avatar: "/indian-man-smiling-portrait.png",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Stories of Hope
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Real People, Real Journeys
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Hear from members of our community who found strength, support, and hope through CareConnect.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-3xl p-8 border border-border shadow-sm relative">
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              <p className="text-foreground leading-relaxed mb-8 mt-4 text-lg">&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
