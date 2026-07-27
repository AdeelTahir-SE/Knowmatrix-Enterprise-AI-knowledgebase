"use client";

import React, { useState } from "react";
import { Plus, MoreHorizontal, Mail, Shield, User, X } from "lucide-react";

export default function TeamPage() {
  const [showInvite, setShowInvite] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Adeel Tahir",
      email: "adeel@example.com",
      role: "Owner",
      status: "Active",
      initials: "AT",
      avatarColor: "bg-indigo-600",
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "sarah.c@example.com",
      role: "Admin",
      status: "Active",
      initials: "SC",
      avatarColor: "bg-emerald-600",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.j@example.com",
      role: "Member",
      status: "Pending",
      initials: "MJ",
      avatarColor: "bg-gray-400",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@example.com",
      role: "Viewer",
      status: "Active",
      initials: "ED",
      avatarColor: "bg-purple-600",
    },
  ];

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Members</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your organization's members, roles, and access permissions.
          </p>
        </div>
        <button
          onClick={() => setShowInvite(!showInvite)}
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <Plus size={16} />
          Invite Member
        </button>
      </div>

      {/* Invite Member Section (Animated Dropdown/Inline) */}
      {showInvite && (
        <div className="mb-8 rounded-xl border border-indigo-100 bg-indigo-50/50 p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Invite new members</h2>
            <button
              onClick={() => setShowInvite(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          <p className="mb-6 text-sm text-gray-600">
            Send an email invitation to add new collaborators to your workspace.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail size={16} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="colleague@company.com"
                  className="block w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="w-full sm:w-48">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Role
              </label>
              <select className="block w-full rounded-lg border border-gray-200 py-2.5 pl-3 pr-8 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                <option value="member">Member</option>
                <option value="admin">Admin</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>
            <button className="w-full rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-indigo-700 sm:w-auto">
              Send Invite
            </button>
          </div>
        </div>
      )}

      {/* Members Table */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50">
              <tr className="border-b border-gray-200 text-xs font-semibold text-gray-500">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {teamMembers.map((member) => (
                <tr key={member.id} className="transition-colors hover:bg-gray-50/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${member.avatarColor}`}>
                        {member.initials}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {member.role === "Owner" || member.role === "Admin" ? (
                        <Shield size={14} className="text-indigo-600" />
                      ) : (
                        <User size={14} className="text-gray-500" />
                      )}
                      <span className="text-sm font-semibold text-gray-700">{member.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${
                        member.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="rounded-md p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
