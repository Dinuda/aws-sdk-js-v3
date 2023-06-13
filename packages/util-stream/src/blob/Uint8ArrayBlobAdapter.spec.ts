import { BlobAdapter } from "./BlobAdapter";

describe(BlobAdapter.name, () => {
  it("extends Uint8Array", () => {
    const blobby = new BlobAdapter(5);

    blobby[-1] = 8;
    blobby[0] = 8;
    blobby[1] = -1;
    blobby[3] = 256;
    blobby[4] = 8;
    blobby[5] = 8;

    // cannot use unallocated index left
    expect(blobby[-1]).toEqual(undefined);
    expect(blobby[0]).toEqual(8);
    // downward overflow
    expect(blobby[1]).toEqual(255);
    // upward overflow
    expect(blobby[3]).toEqual(0);
    expect(blobby[4]).toEqual(8);
    // cannot use unallocated index right
    expect(blobby[5]).toEqual(undefined);

    expect(blobby.length).toEqual(5);
  });

  it("should transform to string synchronously", () => {
    throw new Error("NYI");
  });
});
