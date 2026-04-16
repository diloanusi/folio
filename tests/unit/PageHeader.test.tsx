import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PageHeader from "@/components/PageHeader";

describe("PageHeader", () => {
  it("renders archiveId, title, and description", () => {
    render(
      <PageHeader
        archiveId="[ARCH-001]"
        title="Test Section"
        description="A short description."
      />
    );
    expect(screen.getByText("[ARCH-001]")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Test Section" })).toBeInTheDocument();
    expect(screen.getByText("A short description.")).toBeInTheDocument();
  });

  it("renders without description", () => {
    render(<PageHeader archiveId="[ARCH-001]" title="No Desc" />);
    expect(screen.getByRole("heading", { name: "No Desc" })).toBeInTheDocument();
  });
});
