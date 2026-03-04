"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "@/components/atoms/card";
import { Field, FieldLabel } from "@/components/atoms/field";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/atoms/avatar";
import {
  Search,
  Plus,
  MoreVertical,
  User,
  Calendar,
  CreditCard,
} from "lucide-react";

// Helper function to get initials from name
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

// Mock client data
const clients = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    membershipType: "Premium",
    joinDate: "Jan 15, 2024",
    status: "Active",
    lastVisit: "2 hours ago",
    photo: undefined, // No photo, will show initials
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@email.com",
    membershipType: "Basic",
    joinDate: "Feb 3, 2024",
    status: "Active",
    lastVisit: "1 day ago",
    photo: undefined,
  },
  {
    id: 3,
    name: "Emma Williams",
    email: "emma.w@email.com",
    membershipType: "Premium",
    joinDate: "Dec 10, 2023",
    status: "Active",
    lastVisit: "3 hours ago",
    photo: undefined,
  },
  {
    id: 4,
    name: "James Rodriguez",
    email: "j.rodriguez@email.com",
    membershipType: "Basic",
    joinDate: "Mar 22, 2024",
    status: "Inactive",
    lastVisit: "2 weeks ago",
    photo: undefined,
  },
  {
    id: 5,
    name: "Olivia Martinez",
    email: "olivia.m@email.com",
    membershipType: "Premium",
    joinDate: "Jan 8, 2024",
    status: "Active",
    lastVisit: "5 hours ago",
    photo: undefined,
  },
  {
    id: 6,
    name: "David Kim",
    email: "david.kim@email.com",
    membershipType: "Basic",
    joinDate: "Feb 28, 2024",
    status: "Active",
    lastVisit: "1 day ago",
    photo: undefined,
  },
];

export default function GymDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">
                FitPass Dashboard
              </h1>
              <p className="text-sm text-zinc-600">
                Manage your gym clients and memberships
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="default"
                onClick={() => router.push("/profile")}
              >
                <User />
                Profile
              </Button>
              <Button
                variant="default"
                size="default"
                onClick={() => router.push("/clients/new")}
              >
                <Plus />
                Add Client
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col gap-1 py-6">
              <div className="text-sm font-medium text-zinc-600">
                Total Clients
              </div>
              <div className="text-3xl font-semibold text-zinc-950">248</div>
              <div className="text-xs text-zinc-500">+12 this month</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col gap-1 py-6">
              <div className="text-sm font-medium text-zinc-600">
                Active Members
              </div>
              <div className="text-3xl font-semibold text-zinc-950">189</div>
              <div className="text-xs text-zinc-500">76% of total</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col gap-1 py-6">
              <div className="text-sm font-medium text-zinc-600">
                Monthly Revenue
              </div>
              <div className="text-3xl font-semibold text-zinc-950">
                $24,890
              </div>
              <div className="text-xs text-zinc-500">+8% from last month</div>
            </CardContent>
          </Card>
        </div>

        {/* Client List Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Client Directory</CardTitle>
                <CardDescription>
                  View and manage all gym members
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col gap-6">
            {/* Search Bar */}
            <Field>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
                <Input
                  type="search"
                  placeholder="Search clients by name or email..."
                  className="pl-10"
                />
              </div>
            </Field>

            {/* Client Cards */}
            <div className="flex flex-col gap-4">
              {clients.map((client) => (
                <Card key={client.id} size="sm">
                  <CardContent className="py-4">
                    <div className="flex items-start justify-between gap-4">
                      {/* Client Info */}
                      <div className="flex flex-1 items-start gap-4">
                        <Avatar size="default">
                          <AvatarImage src={client.photo} alt={client.name} />
                          <AvatarFallback>
                            {getInitials(client.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-1 flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-zinc-950">
                              {client.name}
                            </h3>
                            <span
                              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                client.status === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-zinc-100 text-zinc-600"
                              }`}
                            >
                              {client.status}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-600">
                            {client.email}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-zinc-600">
                            <div className="flex items-center gap-1.5">
                              <CreditCard className="size-4" />
                              <span>{client.membershipType}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="size-4" />
                              <span>Joined {client.joinDate}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-zinc-400">•</span>
                              <span>Last visit: {client.lastVisit}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => router.push(`/clients/${client.id}`)}
                        >
                          View Profile
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => console.log("More options", client.id)}
                        >
                          <MoreVertical />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-zinc-200 pt-4">
              <p className="text-sm text-zinc-600">Showing 6 of 248 clients</p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
