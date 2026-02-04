"use client"

import { IProperty } from "@/types/property"
import {
  MapPin,
  Calendar,
  DollarSign,
  Home,
  Zap,
  Building2,
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
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-[#00786F] mb-2">
          <MapPin size={18} />
          <span className="font-semibold">{property.location}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
          {property.title}
        </h1>

        <div className="text-3xl sm:text-4xl font-serif font-bold">
          {formatPriceText(property.price)}
        </div>
      </div>

      {/* QUICK STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {!isProject && property.beds > 0 && (
          <Stat title="Bedrooms" value={property.beds} />
        )}

        {!isProject && property.baths > 0 && (
          <Stat title="Bathrooms" value={property.baths} />
        )}

        {isProject ? (
          <Stat title="Floors" value={property.project_overview?.floors} />
        ) : (
          <Stat title="Square Feet" value={property.sqft?.toLocaleString()} />
        )}

        <Stat
          title="Status"
          value={property.status || "Active"}
        />
      </div>

      {/* DESCRIPTION */}
      <div>
        <h2 className="text-2xl font-serif font-bold mb-4">
          About This {isProject ? "Project" : "Property"}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {property.description}
        </p>
      </div>

      {/* PROJECT OVERVIEW */}
      {isProject && property.project_overview && (
        <div>
          <h2 className="text-2xl font-serif font-bold mb-6">
            Project Overview
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <InfoItem
              icon={<Building2 />}
              label="Developer"
              value={property.project_overview.developer}
            /> */}
            <InfoItem
              icon={<ShieldCheck />}
              label="Ownership"
              value={property.project_overview.ownership}
            />
            <InfoItem
              icon={<Layers />}
              label="Completion"
              value={property.project_overview.anticipated_completion}
            />
            <InfoItem
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
          <h2 className="text-2xl font-serif font-bold mb-4">
            Available Unit Types
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-900/10 rounded-lg">
              <thead className="bg-[#dbb55c2c]">
                <tr>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Size</th>
                  <th className="p-3 text-left">Starting Price</th>
                  <th className="p-3 text-left">Parking</th>
                </tr>
              </thead>
              <tbody>
                {property.unit_types.map((unit, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3 font-medium">{unit.type}</td>
                    <td className="p-3">{unit.size_range}</td>
                    <td className="p-3 font-semibold">
                      {unit.starting_price}
                    </td>
                    <td className="p-3">{unit.parking}</td>
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
          <h2 className="text-2xl font-serif font-bold mb-4">
            Payment Plan
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {property.payment_plan.map((step, i) => (
              <div
                key={i}
                className="bg-[#dbb55c2c] p-4 rounded-lg"
              >
                <div className="text-sm text-gray-600 mb-1">
                  {step.stage}
                </div>
                <div className="text-2xl font-bold text-[#dbb45c]">
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

/* Small helpers */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Stat = ({ title, value }: { title: string; value?: any }) => (
  <div className="bg-[#dbb55c2c] p-4 rounded-lg">
    <div className="text-sm text-gray-600 mb-1">{title}</div>
    <div className="text-2xl font-bold text-[#dbb45c]">
      {value ?? "—"}
    </div>
  </div>
)

const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value?: string
}) => (
  <div className="flex gap-4 items-start">
    <div className="text-[#00786F]">{icon}</div>
    <div>
      <div className="text-sm text-gray-600">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  </div>
)

export default PropertyDetailsSection
