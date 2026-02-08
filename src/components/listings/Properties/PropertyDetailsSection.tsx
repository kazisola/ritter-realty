"use client"

import { IProperty } from "@/types/property"
import {
  MapPin,
  Home,
  Layers,
  ShieldCheck,
} from "lucide-react"

interface PropertyDetailsSectionProps {
  property: IProperty
}

const PropertyDetailsSection = ({ property }: PropertyDetailsSectionProps) => {
  const isProject = property.beds === 0 && property.unit_types?.length > 0

  const formatPriceText = (price?: string) => price || "Price on request"

  return (
    <div className="space-y-16">
      <div className="relative">
        <div className="flex items-center gap-2 text-[#00786F] mb-3">
          <MapPin size={18} strokeWidth={2.5} />
          <span className="font-semibold tracking-wide">{property.location}</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-light text-slate-900 tracking-tight mb-6">
          {property.title}
        </h1>

        <div className="text-4xl sm:text-5xl font-light text-slate-900">
          {formatPriceText(property.price)}
        </div>

        <div className="mt-6 h-px bg-gradient-to-r from-[#00786F] via-slate-300 to-transparent max-w-md" />
      </div>

      {/* QUICK STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {!isProject && property.beds > 0 && (
          <MinimalStat title="Bedrooms" value={property.beds} />
        )}

        {!isProject && property.baths > 0 && (
          <MinimalStat title="Bathrooms" value={property.baths} />
        )}

        {isProject ? (
          <MinimalStat title="Floors" value={property.project_overview?.floors} />
        ) : (
          <MinimalStat title="Square Feet" value={property.sqft?.toLocaleString()} />
        )}

        <MinimalStat
          title="Status"
          value={property.status || "Active"}
        />
      </div>

      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00786F] to-transparent max-w-xs" />
        </div>
        <h2 className="text-4xl font-light text-slate-900 tracking-tight mb-6">
          About This {isProject ? "Project" : "Property"}
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed font-light max-w-4xl">
          {property.description}
        </p>
      </div>

      {/* PROJECT OVERVIEW */}
      {isProject && property.project_overview && (
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00786F] to-transparent max-w-xs" />
          </div>
          <h2 className="text-4xl font-light text-slate-900 tracking-tight mb-8">
            Project Overview
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <MinimalInfoItem
              icon={<ShieldCheck />}
              label="Ownership"
              value={property.project_overview.ownership}
            />
            <MinimalInfoItem
              icon={<Layers />}
              label="Completion"
              value={property.project_overview.anticipated_completion}
            />
            <MinimalInfoItem
              icon={<Home />}
              label="Property Type"
              value={property.project_overview.property_type}
            />
          </div>
        </div>
      )}

      {/* UNIT TYPES */}
      {isProject && property.unit_types?.length > 0 && (
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00786F] to-transparent max-w-xs" />
          </div>
          <h2 className="text-4xl font-light text-slate-900 tracking-tight mb-8">
            Available Unit Types
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-900">
                  <th className="pb-4 text-left font-semibold text-slate-900 text-sm uppercase tracking-wider">Type</th>
                  <th className="pb-4 text-left font-semibold text-slate-900 text-sm uppercase tracking-wider">Size</th>
                  <th className="pb-4 text-left font-semibold text-slate-900 text-sm uppercase tracking-wider">Starting Price</th>
                  <th className="pb-4 text-left font-semibold text-slate-900 text-sm uppercase tracking-wider">Parking</th>
                </tr>
              </thead>
              <tbody>
                {property.unit_types.map((unit, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-200 hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="py-5 font-medium text-slate-800">{unit.type}</td>
                    <td className="py-5 text-slate-700 font-light">{unit.size_range}</td>
                    <td className="py-5 font-semibold text-[#00786F]">
                      {unit.starting_price}
                    </td>
                    <td className="py-5 text-slate-700 font-light">{unit.parking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* PAYMENT PLAN */}
      {isProject && property.payment_plan?.length > 0 && (
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00786F] to-transparent max-w-xs" />
          </div>
          <h2 className="text-4xl font-light text-slate-900 tracking-tight mb-8">
            Payment Plan
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {property.payment_plan.map((step, i) => (
              <div
                key={i}
                className="group pb-6 border-b border-slate-200 hover:border-[#00786F] transition-all"
              >
                <div className="text-sm text-slate-600 mb-2 font-light uppercase tracking-wider">
                  {step.stage}
                </div>
                <div className="text-4xl font-light text-slate-900 group-hover:text-[#00786F] transition-colors">
                  {step.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* helper components */
const MinimalStat = ({ title, value }: { title: string; value?: string | number }) => (
  <div className="group">
    <div className="text-sm text-slate-600 mb-2 font-light uppercase tracking-wider">{title}</div>
    <div className="text-3xl font-light text-slate-900 group-hover:text-[#00786F] transition-colors">
      {value ?? "—"}
    </div>
    <div className="mt-3 h-px w-12 bg-slate-300 group-hover:w-full group-hover:bg-[#00786F] transition-all duration-500" />
  </div>
)

const MinimalInfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value?: string
}) => (
  <div className="group pb-6 border-b border-slate-200 hover:border-[#00786F] transition-all">
    <div className="flex gap-4 items-start">
      <div className="text-[#00786F] mt-1 group-hover:scale-110 transition-transform">{icon}</div>
      <div className="flex-1">
        <div className="text-sm text-slate-600 mb-1 font-light uppercase tracking-wider">{label}</div>
        <div className="font-medium text-slate-900 text-lg">{value}</div>
      </div>
    </div>
  </div>
)

export default PropertyDetailsSection