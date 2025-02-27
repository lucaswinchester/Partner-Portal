import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import { createClerkClient } from '@clerk/backend';

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export async function GET(req: NextRequest) {
  try {
    // Get logged-in user ID
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch user's organization memberships
    const { data: memberships, totalCount } = await clerkClient.users.getOrganizationMembershipList({ userId });

    if (!memberships || totalCount === 0) {
      return NextResponse.json({ error: 'User is not in any organization' }, { status: 404 });
    }

    // Get first organization ID
    const organizationId = memberships[0].organization.id;

    // Fetch organization members
    const { data: members } = await clerkClient.organizations.getOrganizationMembershipList({ organizationId });

    return NextResponse.json({ userId, organizationId, members }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
