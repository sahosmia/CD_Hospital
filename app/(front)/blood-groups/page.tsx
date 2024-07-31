import { getBloodGroups } from "@/actions/bloodGroupsActions";
import BloodGroupCard from "../_component/blood-group/BloodGroupCard";
import { getDoners } from "@/actions/donerActions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BloodGroups = async () => {
  const bloodGroups = await getBloodGroups();
  const donerLists = await getDoners();

  return (
    <div className="container">
      <div>BloodGroups</div>
      {bloodGroups && bloodGroups?.length > 0 ? (
        <div className="box-2 grid grid-cols-4 gap-5 text-center">
          {bloodGroups.map((bloodGroup) => (
            <BloodGroupCard key={bloodGroup.id} bloodGroup={bloodGroup} />
          ))}
        </div>
      ) : (
        <div className="box-1">No Blood Group Found!</div>
      )}

      <div className="mt-40">Doner List</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Facebook</TableHead>
            <TableHead>Blood Group</TableHead>
          </TableRow>
        </TableHeader>

        {donerLists && donerLists?.length > 0 ? (
          <TableBody>
            {donerLists.map((doner) => (
              <>
                <TableRow key={doner.id}>
                  <TableCell>{doner.name}</TableCell>
                  <TableCell>{doner.address}</TableCell>
                  <TableCell>{doner.phone}</TableCell>
                  <TableCell>{doner.facebook}</TableCell>
                  <TableCell>{doner.blood_group.name}</TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell>No Doner Found</TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </div>
  );
};

export default BloodGroups;
