import Button from "./Button";

interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
}

export default function PaginationControls({
    currentPage,
    totalPages,
    onPrevious,
    onNext,
}: PaginationControlsProps) {
    return (
        <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-slate-300">
                Page {currentPage + 1} of {totalPages}
            </p>

            <div className="flex items-center justify-center gap-3">
                <Button
                    onClick={onPrevious}
                    disabled={currentPage === 0}
                    className="px-6 py-2 text-sm"
                >
                    Previous
                </Button>

                <Button
                    onClick={onNext}
                    disabled={currentPage + 1 >= totalPages}
                    className="px-6 py-2 text-sm"
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
